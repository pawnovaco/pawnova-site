import { redirect } from "next/navigation";
export const metadata={title:"Pet Product Finds",description:"Browse Paw Nova pet product finds organized around real needs."};
export default function DogFinds(){redirect("/products");}