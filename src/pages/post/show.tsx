import { useSelect, useShow } from "@refinedev/core";
import { IPost } from "../../../interface/post";

export const PostShow: React.FC = () => {
  const { queryResult } = useShow<IPost>();
  const { data } = queryResult;
  const record = data?.data;

  const { options } = useSelect({
    resource: "category",
    defaultValue: queryResult?.data?.data?.category?.[0],
    optionLabel: "name",
    optionValue: "id",
  });

  return (
    <div className="container mx-auto">
      <div className="my-6">
        <label className="mb-2 block text-sm font-medium">Id</label>
        <input
          value={record?.id}
          disabled
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Name</label>
        <input
          value={record?.title}
          disabled
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Title</label>
        <input
          value={record?.title}
          disabled
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Content</label>
        <textarea
          disabled
          value={record?.content}
          id="content"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
          placeholder="Content"
          rows={10}
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Category</label>
        <input
          value={
            options?.find((curr) => curr?.value === record?.category[0])
              ?.label || record?.category
          }
          disabled
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Status</label>
        <input
          value={record?.Status}
          disabled
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Created At</label>
        <input
          type={"date"}
          value={record?.createdAt}
          disabled
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
        />
      </div>
    </div>
  );
};