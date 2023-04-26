import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repo
      </Link>
      <Suspense fallback={<div>loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};
export default RepoPage;
