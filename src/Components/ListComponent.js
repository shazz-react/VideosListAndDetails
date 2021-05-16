import React from "react";
import styled from "styled-components/native";

const ListComponent = (props) => {
  return (
    <List
      style={[props.styles]}
      data={props.data}
      renderItem={props.renderListItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const List = styled.FlatList`
  width: 90%;
  padding: 10px;
`;

export default ListComponent;
