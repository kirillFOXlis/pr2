import { Categories, Title } from "@/components/shared";
import { Container } from "@/components/shared";
import { SortPopup } from "@/components/shared/sort-popup";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
    <Container className="mt-5">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>
    </Container> 
    <TopBar/>
 
      
    </>
  );
}
