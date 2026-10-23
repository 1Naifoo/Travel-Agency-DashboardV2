import { Header } from "../../../components"

const CreateTrip = () => {
    const handleSubmit = async () => {};
    return (
        <main className="flex flex-col gap-10 pb-20 wrapper">
            
        
        <Header
            title="Add a new Trip"
            description = "Fill out the form below to create a new trip."
        />

        <section className="mt-2.5 wrapper-md">
            <form className="trip-form" onSubmit= {handleSubmit}>
              
            </form>
        </section>
        </main>
    )
}

export default CreateTrip