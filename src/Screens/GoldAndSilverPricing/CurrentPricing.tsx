import React from "react";
import { Box, Text } from "../../components";
import { Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
interface indexProps {}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const data = [
  {
    id: 1,
    metals: "GOLD",
    date: "07/31/2020",
    Bid: 1967.5,
  },
  {
    id: 2,
    metals: "SILVER",
    date: "07/31/2020",
    Bid: 1967.5,
  },
  {
    id: 3,
    metals: "PLATINUM",
    date: "07/31/2020",
    Bid: 1967.5,
  },
  {
    id: 4,
    metals: "PALLADIUM",
    date: "07/31/2020",
    Bid: 1967.5,
  },
];
const CurrentPricing = ({}: indexProps) => {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box padding="m">
        <Box paddingVertical="s">
          <Text variant="cardSubTitle" color="primaryText">
            Prices
          </Text>
        </Box>
        <Box
          borderRadius="s"
          marginHorizontal="m"
          borderWidth={StyleSheet.hairlineWidth}
          borderColor="greyish"
        >
          <Box
            borderColor="greyish"
            borderWidth={1}
            borderTopRightRadius="s"
            borderTopLeftRadius="s"
            paddingVertical="s"
            paddingHorizontal="m"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text variant="silentText">Metals</Text>
            <Text variant="silentText">Date</Text>
            <Text variant="silentText">Bids</Text>
          </Box>

          {data.map((item, i) => {
            return (
              <Box
                borderColor="greyish"
                borderBottomWidth={1}
                paddingVertical="s"
                paddingHorizontal="m"
                key={i}
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text variant="silentText">{item.metals}</Text>
                <Text>{item.date}</Text>
                <Text>{item.Bid}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box marginHorizontal="s" justifyContent="center">
        <Text textAlign="center">Gold vs Silver</Text>
        <LineChart
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "April",
              "May",
              "June",
              "July",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                strokeWidth: 2,
                color: (opacity = 1) => `rgba(0,0,102, ${opacity})`,
              },
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                strokeWidth: 2,
                color: (opacity = 1) => `rgba(0,102,0, ${opacity})`,
              },
            ],
            legend: ['Silver', 'Gold']
          }}
          width={wWidth - 20} // from react-native
          height={wWidth - 80}
          yAxisLabel="Rs"
          yAxisInterval={100} // optional, defaults to 1
          fromZero={true}
          verticalLabelRotation={90}
          chartConfig={{
            backgroundColor: "grey",
            backgroundGradientFrom: "grey",
            backgroundGradientTo: "grey",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "3",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 15,
            borderRadius: 16,
          }}
        />
      </Box>
    </Box>
  );
};

export default CurrentPricing;
