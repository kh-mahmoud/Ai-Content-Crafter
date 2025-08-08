import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    if (evt.type === "user.created") {
      const {
        id,
        email_addresses,
        image_url,
        first_name,
        last_name,
        username,
      } = evt.data;


      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        username: username!,
        firstName: first_name!,
        lastName: last_name!,
        photo: image_url,
      };

      const newUser = await createUser(user);

      return NextResponse.json({ message: "OK", user: newUser });
    }

    // UPDATE user
    if (evt.type === "user.updated") {
      const { image_url, username, id } = evt.data;

      const user = {
        username: username!,
        photo: image_url,
      };

      const updatedUser = await updateUser(user, id);

      return NextResponse.json({ message: "OK", user: updatedUser });
    }

    // DELETE user
    if (evt.type === "user.deleted") {
      const { id } = evt.data;

      const deletedUser = await deleteUser(id!);

      return NextResponse.json({ message: "OK", user: deletedUser });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
