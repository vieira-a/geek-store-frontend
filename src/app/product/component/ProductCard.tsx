import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard(productProps: ProductCardProps) {
  return (
    <div className="flex flex-col justify-between h-full p-4 border rounded">
      <div className="flex justify-center">
        <Image
          width={48}
          height={48}
          src={productProps.imageUrl}
          alt="Product"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{productProps.name}</h3>
        <p className="mt-2 text-zinc-600">R$ {productProps.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
