import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, SearchBox, Text } from '../../components';
import ListCard from './components/ListCard';

interface NewsEventsEventsProps {


}
const EventList = [
    {
      id: 1,
      image: require("./assets/abp.png"),
      title:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      desc:
        "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
    },
    {
      id: 2,
      image: require("./assets/dd.png"),
      title:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      desc:
        "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
    },
    {
      id: 3,
      image: require("./assets/news.png"),
      title:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      desc:
        "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
    },
  ];
const NewsEventsEvents = ({}: NewsEventsEventsProps) => {
    const [searchText, setSearchText] = useState<string>("");
    const handleChangeText = (text: string) => {
      setSearchText(text);
    };
return (
<Box flex={1}>
      <SearchBox {...{ searchText, handleChangeText }} />
      <Box backgroundColor="mainBackground" paddingVertical="s">
        <ScrollView>

        {EventList.map((data, i) => {
          return (
            <ListCard key={data.id} {... {data}}/>
          );
        })}
        </ScrollView>

      </Box>
    </Box>
)
}




export default NewsEventsEvents;