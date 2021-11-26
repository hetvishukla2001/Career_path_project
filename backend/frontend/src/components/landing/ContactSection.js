import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';


export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Solve your doubts">
                    To answer your questions and your doubts we have 
                    created 3 different sections.
                </Title>
                
                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="" title="Reviews" link="../Review">{/*link to review page */}
                        Here you can find reviews of all the listed colleges
                    </ContactCard>
                    <ContactCard icon="" title="Q/A Time" link="../Q_A">{/*link to Q/A page page */}
                        {/*<p onclick={() => window.open("src\components\landing\Q_A.js","Popup")}>Get some answers to few most asked questions</p>*/}
                        Get some answers to few most asked questions
                    </ContactCard>
                    <ContactCard icon="" title="Contact Professor" link="../Prof">{/*link to Professors details page */}
                        To get a professional answer you can contact a Professor
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
