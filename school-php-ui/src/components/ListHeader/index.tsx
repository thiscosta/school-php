import React from "react";
import { Header, Icon, SemanticICONS } from "semantic-ui-react";

interface ListHeaderProps {
  icon: SemanticICONS;
  title: string;
  description: string;
}

const ListHeader: React.FC<ListHeaderProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Header as="h2">
      <Icon name={icon} />
      <Header.Content>
        {title}
        <Header.Subheader>{description}</Header.Subheader>
      </Header.Content>
    </Header>
  );
};

export default ListHeader;
