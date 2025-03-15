import Image from "next/image";

export default function LogoCloud() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-lg font-medium">
          Your favorite companies are our partners.
        </h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Image
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            alt="Nvidia Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/column.svg"
            alt="Column Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="GitHub Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            alt="Nike Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/laravel.svg"
            alt="Laravel Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-7 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lilly.svg"
            alt="Lilly Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
            alt="Lemon Squeezy Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-6 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            alt="OpenAI Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
            alt="Tailwind CSS Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/vercel.svg"
            alt="Vercel Logo"
            height={20}
            width={20}
          />
          <Image
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/zapier.svg"
            alt="Zapier Logo"
            height={20}
            width={20}
          />
        </div>
      </div>
    </section>
  );
}
