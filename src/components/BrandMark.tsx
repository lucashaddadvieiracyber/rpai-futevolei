import Image from "next/image";

export function BrandMark({
  compact = false,
}: {
  compact?: boolean;
}) {
  const h = compact ? 44 : 56;

  return (
    <span className="inline-flex items-center">
      <Image
        src="/media/logo.png"
        alt="Rui Pai Futevôlei"
        width={508}
        height={491}
        className="w-auto"
        style={{ height: h }}
        priority
      />
    </span>
  );
}
