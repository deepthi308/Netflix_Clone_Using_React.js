import BrowseContainer from "../containers/BrowseContainer";
import HeaderContainer from "../containers/HeaderContainer";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";

export default function Browse({ children, ...restProps }) {
  // We need the series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");

  // We need slides
  const slides = selectionFilter({ series, films });
  console.log(slides);

  // Pass it to the browse container
  return <BrowseContainer slides={slides}></BrowseContainer>;
}
