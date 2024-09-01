import Plan from "../Components/Plan"

interface IProps {

}


const PlansPage = ({ }: IProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Plans:</h1>
      <main className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Plan title={"Free"} price={"0.00"} free />
        <Plan title={"Basic"} price={"7.99"} basic />
        <Plan title={"Premium"} price={"19.99"} premium />
      </main>
    </>
  )
}

export default PlansPage