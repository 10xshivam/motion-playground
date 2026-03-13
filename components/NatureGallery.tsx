"use client";

import {
  IconButterfly,
  IconLeaf,
  IconMist,
  IconSeedling,
  TablerIcon,
} from "@tabler/icons-react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

interface ParallaxItem {
  icon: TablerIcon;
  title: string;
  description: string;
  image: string;
}

function ParallaxRow({ item, index }: { item: ParallaxItem; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const direction = index % 2 === 0 ? 1 : -1;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-200 * direction, 200 * direction]),
    {
      stiffness: 120,
      damping: 24,
      mass: 0.9,
    },
  );

  const fade = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <section
      ref={rowRef}
      className="grid items-start gap-10 py-24 md:grid-cols-2 md:py-50"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col items-start justify-center"
      >
        <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-800">
          <item.icon className="size-10 text-white" />
        </div>
        <h3 className="font-heading mb-1.5 text-4xl font-medium text-white">
          {item.title}
        </h3>
        <p className="max-w-[85%] leading-snug tracking-tight text-neutral-400">
          {item.description}
        </p>
      </motion.div>

      <motion.div
        style={{ y: imageY, opacity: fade }}
        className="self-start overflow-hidden rounded-xl"
      >
        <Image
          src={item.image}
          width={500}
          height={500}
          alt={item.title}
          loading="eager"
          className="aspect-square w-full object-cover"
        />
      </motion.div>
    </section>
  );
}

const parallaxItems: ParallaxItem[] = [
  {
    icon: IconSeedling,
    title: "Mossy Sprout",
    description:
      "A delicate young stem rises from a moss-covered surface against a soft blurred glow.",
    image:
      "https://images.unsplash.com/photo-1714598909357-2a35ad44b977?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MnwwfHx8MA%3D%3D",
  },
  {
    icon: IconMist,
    title: "Misty Treeline",
    description:
      "A quiet band of forest fades into dense fog above an open earthy field.",
    image:
      "https://images.unsplash.com/photo-1431965400057-a84b80cfdbff?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDJ8MHx8fDA%3D",
  },
  {
    icon: IconLeaf,
    title: "Fern Fronds",
    description:
      "Layered fern leaves stretch across a dark woodland background in muted green and copper tones.",
    image:
      "https://images.unsplash.com/photo-1630490226740-a7571283ea08?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfDJ8MHx8fDA%3D",
  },
  {
    icon: IconButterfly,
    title: "Butterfly Bloom",
    description:
      "A colorful butterfly rests atop drooping yellow flowers against a deep shaded backdrop.",
    image:
      "https://images.unsplash.com/photo-1658159311518-b12805da0128?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfDJ8MHx8fDA%3D",
  },
];

export function NatureGallery() {
  return (
    <div className="flex max-w-4xl flex-col gap-14 py-20">
      {parallaxItems.map((item, index) => (
        <ParallaxRow key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
