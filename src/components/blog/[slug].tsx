import { marked } from "marked";

export default function PostPage({
  frontmatter: { title, date, cover_image },
}) {
  return (
    <>
      <div className="pt-28 pl-4 pr-4 md:pr-72 md:pl-72 pb-28 shadow-xl">
        <a href="/blog">
          <a className="inline-flex px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow sm:w-auto active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring">
            Go Back
          </a>
        </a>
        <div>
          <h1 className="text-2xl font-bold pt-4">{title}</h1>
          <div className="pb-4">Posted on {date}</div>
          <img src={cover_image} alt="" />
          <div className="prose pt-4">
            <div dangerouslySetInnerHTML={{ __html: marked }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
