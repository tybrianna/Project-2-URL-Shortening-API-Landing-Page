import { ItemLink, List, NavigationWrapper } from "./navigation.styles";
function Navigation({ clicked, handleClick }) {
  return (
    <NavigationWrapper clicked={clicked}>
      <List>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Home
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            About
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Portfolio
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Blog
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Contact Us
          </ItemLink>
        </li>
      </List>
    </NavigationWrapper>
  );
}

export default Navigation;
