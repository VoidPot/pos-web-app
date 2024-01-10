import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

const categoryList = [
  {
    name: "All Menu",
    image:
      "https://images.unsplash.com/photo-1612204104655-6c8a57ae235f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2RzfGVufDB8fDB8fHww",
  },
  {
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1609167830220-7164aa360951?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Briyani",
    image: "",
  },
  {
    name: "Indian Breads",
    image: "",
  },
  {
    name: "Juice",
    image: "",
  },
  {
    name: "Desert",
    image: "",
  },
  {
    name: "Noodles",
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "All Menu",
    image:
      "https://images.unsplash.com/photo-1612204104655-6c8a57ae235f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2RzfGVufDB8fDB8fHww",
  },
  {
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1609167830220-7164aa360951?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Briyani",
    image: "",
  },
  {
    name: "Indian Breads",
    image: "",
  },
  {
    name: "Juice",
    image: "",
  },
  {
    name: "Desert",
    image: "",
  },
  {
    name: "Noodles",
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function CategoriesSlide() {
  const [api, setApi] = React.useState<CarouselApi>();

  const onSelect = (_emblaApi: any, eventName: any) => {
    console.log(`Embla just triggered ${eventName}!`);
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }
    console.log({ api });
    api.on("select", onSelect);
  }, [api]);

  return (
    <Carousel className="w-auto" setApi={setApi} opts={{}}>
      <CarouselContent className="-ml-1">
        {categoryList.map((category, index) => (
          <CarouselItem
            key={index}
            className="md:p-2 p-1 basis-2/4 md:basis-48 select-none h-auto"
          >
            <div className="p-2 flex bg-white rounded-lg h-full w-full justify-start align-middle items-center gap-2">
              <Avatar className="cursor-pointer select-none bg-secondary rounded-lg">
                <AspectRatio ratio={1 / 1} className="h-full">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt="Photo by Drew Beamer"
                      fill
                      className="rounded-md object-cover"
                    />
                  ) : (
                    <AvatarFallback className=" text-4xl ">
                      {category.name.slice(0, 1)}
                    </AvatarFallback>
                  )}
                </AspectRatio>
              </Avatar>
              <div className="flex flex-col justify-center align-middle items-start">
                <span className="text-sm w-auto">{category.name}</span>
                <span className="text-xs w-auto">20 Items</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
