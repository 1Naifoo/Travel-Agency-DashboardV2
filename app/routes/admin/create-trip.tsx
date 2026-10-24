import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { Header } from "../../../components"
import type { Route } from "./+types/create-trip";

const BASE_URL = "https://api.restcountries.com/countries/v5";

export const loader = async () => {
  // Get a free key at https://restcountries.com/sign-up
  // The demo key only returns a small sample of countries.
  const apiKey = process.env.RESTCOUNTRIES_API_KEY ?? "rc_live_demo";
  const headers = { Authorization: `Bearer ${apiKey}` };

  const fields = [
    "names.common",
    "flag.emoji",
    "coordinates.lat",
    "coordinates.lng",
    "links.open_street_maps",
  ].join(",");

  const limit = 100; // free-plan max per request
  let offset = 0;
  let more = true;
  const objects: any[] = [];

  while (more) {
    const response = await fetch(
      `${BASE_URL}?response_fields=${fields}&limit=${limit}&offset=${offset}`,
      { headers }
    );
    const json = await response.json();

    if (!response.ok) {
      const message = json?.errors?.[0]?.message ?? "Failed to load countries";
      throw new Response(message, { status: response.status });
    }

    objects.push(...json.data.objects);
    more = json.data.meta.more;
    offset += limit;
  }

  return objects.map((country) => ({
    name: `${country.flag?.emoji ?? ""} ${country.names.common}`.trim(),
    coordinates: [country.coordinates?.lat, country.coordinates?.lng],
    value: country.names.common,
    openStreetMap: country.links?.open_street_maps,
  }));
};

const CreateTrip = ({ loaderData }: Route.ComponentProps) => {
    const handleSubmit = async () => {};
    const handleChange = (key: keyof TripFormData, value: string | number) => {

    };
    const countries = loaderData as Country[];

    const countryData = countries.map((country) => ({
        text: country.name,
        value: country.value,
    }));

    console.log(countries);
    return (
        <main className="flex flex-col gap-10 pb-20 wrapper">
            <Header
                title="Add a new Trip"
                description="Fill out the form below to create a new trip."
            />

            <section className="mt-2.5 wrapper-md">
                <form className="trip-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="country">Country</label>
                        <ComboBoxComponent
                            id="country"
                            dataSource={countryData}
                            fields={{ text: "text", value: "value" }}
                            placeholder="Select a country"
                            className="combo-box"
                            change={(e:{value: string | undefined}) => {   

                            if(e.value) {
                                handleChange('country', e.value);
                                }   
                            }
                        }
                            allowFiltering
                           filtering={(e) => {
                                const query = e.text?.toLowerCase() ?? "";

                                e.updateData(
                                    countries
                                        .filter((country) => country.name.toLowerCase().includes(query))
                                        .map((country) => ({
                                            text: country.name,
                                            value: country.value,
                                        }))
                                );
                            }}
                    
                        />
                    </div>
                    <div>

                        <label htmlFor="duration"> Duration</label>
                        <input
                        id="duration"
                        name="duration"
                        type="number"
                        placeholder="Enter a number of days (5, 10....)"
                        className="form-input placeholder:text-gray-100"
                        onChange={(e) => handleChange('duration', Number(e.target.value))}
                        />
                 </div>

                </form>
            </section>
        </main>
    )
}

export default CreateTrip