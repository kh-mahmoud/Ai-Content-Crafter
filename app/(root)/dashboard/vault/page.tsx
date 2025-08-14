import ContentList from "@/components/ContentList";
import Loader from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import { GetContent } from "@/lib/data/vault.data";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <PageHeader
        title="Vault"
        subtitle=" Your saved AI-generated creations, beautifully organized in one place."
      />
      {/* content List */}
      <Suspense
        fallback={
          <div className="loading-state">
            <Loader/>
          </div>
        }
      >
        <ContentList fetchData={GetContent} />
      </Suspense>
    </div>
  );
};

export default Page;
