import ContentList from "@/components/ContentList";
import Loader from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import { GetPublicContent } from "@/lib/data/vault.data";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <PageHeader
        title="Explore"
        subtitle="Explore trending and popular AI-generated works in one place."
      />
      {/* content List */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full mb-2">
            <Loader/>
          </div>
        }
      >
        <ContentList fetchData={GetPublicContent} />
      </Suspense>
    </div>
  );
};

export default Page;
