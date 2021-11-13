import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background1 bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Walk on to an enjoyable CARRER PATH with us.</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                                This website shows the detailed features of various colleges
                                and universities for various degree courses. Go through it in detail 
                                and ensure that you select a college that is just right for you.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
