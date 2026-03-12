import EmptyProducts from "@/app/_components/EmptyProducts/EmptyProducts";
import PageHero from "@/app/_components/PageHero/PageHero";
import ProductCard from "@/app/_components/ProductCard/ProductCard";
import getNameCategory from "@/service/API/getNameCategory";
import getSpecificCategory from "@/service/API/getSpecificCategory";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getSpecificCategory(id);
  const name = await getNameCategory(id);
  console.log(data);
  console.log(name);

  return (
    <>
      <PageHero
        title={name.name}
        subtitle={`Browse products in ` + name.name}
        breadcrumb={name.name}
      />
    <div className="container mx-auto my-5">
  {data.length === 0 ? (
    <EmptyProducts />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
      {data.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  )}
</div>
    </>
  );
}
