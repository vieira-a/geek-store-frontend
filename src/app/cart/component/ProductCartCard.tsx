type ProductCartCardProps = {
  name: string;
  gsic: string;
  quantity: number;
  price: number;
  imageUrl: string;
};

export default function ProductCartCard(productProps: ProductCartCardProps) {
  return (
    <div className="flex justify-between h-full p-6 gap-6">
      <div className="flex gap-4 max-w-[350px]">
        <img
          src={productProps.imageUrl}
          alt="Product"
          className="w-24 h-24 object-cover"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{productProps.name}</h3>
          <h4 className="text-sm">Código do produdo: {productProps.gsic}</h4>
        </div>
      </div>
      <div>
        <h3 className="px-6 text-zinc-600">{productProps.quantity}</h3>
      </div>
      <div>
        <h2 className="text-zinc-600 text-lg font-semibold text-right">
          R$ {productProps.price.toFixed(2)}
        </h2>
      </div>
    </div>
  );
}
