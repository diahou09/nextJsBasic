export default function page({ params }) {
  return (
    <div>
      Store name : {params.productSlug} by {params.storename}
    </div>
  );
}
