import Layout from "@/Layout/Layout";
import { useSlideContext } from "@/context/slide.context";
import { IntermediateForm, Loading, ParametersForm } from "@/root/components";
import MainSlide from "@/root/components/slides/main-slide/MainSlide";


export default function Home() {
  const { slideContextResponse, slide, loading } = useSlideContext();
  return (
    <Layout>
      <div className="w-full">
     
        {loading ? (
          <Loading />
        ) : (
          <section  id="slidGenerator">
            {slideContextResponse.length < 1 ? (<ParametersForm />) : ""}
            {slideContextResponse.length > 2 ? (slide.length > 0 ? (<MainSlide />) : (<IntermediateForm />)) : ""}
          </section>
        )}
      </div>
    </Layout>
  )
}
