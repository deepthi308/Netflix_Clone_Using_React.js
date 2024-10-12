import Accordian from "../components/accordion/Accordion";
import OptForm from "../components/opt-form/OptForm";
import faqsData from "../fixtures/faqs.json";

export default function AccordianContainer() {
  return (
    <Accordian>
      <Accordian.Title>Frequenty Asked Questions</Accordian.Title>
      {faqsData.map((faq) => {
        return (
          <Accordian.Item key={faq.id}>
            <Accordian.Header>{faq.header}</Accordian.Header>
            <Accordian.Body>{faq.body}</Accordian.Body>
          </Accordian.Item>
        );
      })}

      <OptForm>
        <OptForm.Input placeholder="Email Address"></OptForm.Input>
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Accordian>
  );
}
