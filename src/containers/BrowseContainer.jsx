import { useContext, useEffect, useState } from "react";
import { FireBaseContext } from "../context/firebase";
import ProfileContainer from "./ProfileContainer";
import Loading from "../components/loading/Loading";
import Header from "../components/header/Header";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import Card from "../components/card/Card";
import FooterContainer from "./FooterContainer";
import Player from "../components/player/Player";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState();
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FireBaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return (
    <>
      {profile.displayName ? (
        <>
          {isLoading ? (
            <Loading src={user.photoURL} />
          ) : (
            <Loading.ReleaseBody />
          )}
          <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Frame>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                <Header.TextLink
                  active={category === "series" ? "true" : "false"}
                  onClick={() => setCategory("series")}
                >
                  Series
                </Header.TextLink>
                <Header.TextLink
                  active={category === "films" ? "true" : "false"}
                  onClick={() => setCategory("films")}
                >
                  Films
                </Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <Header.Profile>
                  <Header.Picture src={user.photoURL} />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user.photoURL} />
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink
                        onClick={() => firebase.auth().signOut()}
                      >
                        Sign Out
                      </Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
            </Header.Frame>
            <Header.Feature>
              <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
              <Header.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks
                connection as he walks the streets of Gotham City. Arthur wears
                two masks -- the one he paints for his day job as a clown, and
                the guise he projects in a futile attempt to feel like he's part
                of the world around him.
              </Header.Text>
              <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
          </Header>

          <Card.Group>
            {slideRows.map((slideItem) => {
              return (
                <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                  <Card.Title>{slideItem.title}</Card.Title>
                  <Card.Entities>
                    {slideItem.data.map((item) => (
                      <Card.Item key={item.docId} item={item}>
                        <Card.Image
                          src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                        />
                        <Card.Meta>
                          <Card.SubTitle>{item.title}</Card.SubTitle>
                          <Card.Text>{item.description}</Card.Text>
                        </Card.Meta>
                      </Card.Item>
                    ))}
                  </Card.Entities>
                  <Card.Feature category={category}>
                    <Player>
                      <Player.Button />
                      <Player.Video src="/videos/bunny.mp4" />
                    </Player>
                  </Card.Feature>
                </Card>
              );
            })}
          </Card.Group>
          <FooterContainer />
        </>
      ) : (
        <ProfileContainer user={user} setProfile={setProfile} />
      )}
    </>
  );
}
