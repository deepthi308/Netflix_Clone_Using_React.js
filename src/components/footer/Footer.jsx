import {
  Container,
  Row,
  Link,
  Title,
  Text,
  Break,
  Column,
} from "./styles/footer";

export default function Footer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restprops }) {
  return <Row {...restprops}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restprops }) {
  return <Column {...restprops}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restprops }) {
  return <Break {...restprops}>{children}</Break>;
};
