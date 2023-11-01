import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const data = [
  {
    id: "1",
    name: "Pi Co. Pizza",
    rating: "4.6",
    reviews: "1,000+",
    distance: "300 metres",
    time: "26 min",
    deliveryFee: "$0 delivery fee over $15",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Pizza Nova",
    rating: "4.6",
    reviews: "287",
    distance: "400 metres",
    time: "22 min",
    deliveryFee: "$0 delivery fee over $15",
    image:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Pi Co. Pizza",
    rating: "4.6",
    reviews: "1,000+",
    distance: "300 metres",
    time: "26 min",
    deliveryFee: "$0 delivery fee over $15",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Pizza Nova",
    rating: "4.6",
    reviews: "287",
    distance: "400 metres",
    time: "22 min",
    deliveryFee: "$0 delivery fee over $15",
    image:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.addressBarContainer}>
        <Icon name="map-marker" size={24} color="black" />
        <Text style={styles.addressText}>44 Lillian St #2012</Text>
        <View style={styles.iconWithBadge}>
          <Icon name="bell" size={24} color="black" />
          <Text style={styles.badgeNotification}>1</Text>
        </View>
        <View style={styles.iconWithBadge}>
          <Icon name="shopping-cart" size={24} color="black" />
          <Text style={styles.badgeNotification}>5</Text>
        </View>
      </View>

      <FlatList
        style={{ top: 30 }}
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.deliveryFeeContainer}>
              <Text style={styles.deliveryFee}>{item.deliveryFee}</Text>
            </View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Icon
                name="heart-o"
                size={20}
                color="grey"
                style={styles.heartIcon}
              />
              <Text style={styles.details}>
                {item.rating} ⭐ ({item.reviews}) • {item.distance} •{" "}
                {item.time}
              </Text>
              <Text style={styles.deliveryText}>{item.deliveryFee}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.menuContainer}>
        <MenuButton icon="home" label="Home" />
        <MenuButton icon="male" label="Pickup" />
        <MenuButton icon="search" label="Search" />
        <MenuButton icon="list" label="Orders" />
        <MenuButton icon="user" label="Account" />
      </View>
      <TouchableOpacity style={styles.cartButton}>
        <Icon name="shopping-cart" size={30} color="white" />
        <Text style={styles.cartButtonText}>View Cart</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function MenuButton({ icon, label }) {
  return (
    <TouchableOpacity style={styles.menuButton}>
      <Icon name={icon} size={24} color="grey" />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  menuContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  menuButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  cartButton: {
    flexDirection: "row",
    position: "absolute",
    bottom: 75,
    left: 20,
    right: 20,
    backgroundColor: "red",
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cartButtonText: {
    color: "white",
    marginLeft: 10,
    flex: 1,
  },
  badge: {
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "red",
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 6,
  },
  deliveryFeeContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#00CC99",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  deliveryFee: {
    color: "white",
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "column",
    padding: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  heartIcon: {
    alignSelf: "flex-end",
    marginTop: -25,
    marginRight: 0,
  },
  details: {
    marginTop: 5,
    fontSize: 15,
  },
  deliveryText: {
    marginTop: 5,
    fontSize: 14,
    color: "grey",
  },
  iconWithBadge: {
    position: "relative",
    marginRight: 20,
  },
  badgeNotification: {
    position: "absolute",
    right: -10,
    top: -10,
    backgroundColor: "red",
    color: "white",
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: "center",
    lineHeight: 20,
    fontSize: 12,
  },
  addressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    top: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  addressText: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    fontSize: 16,
  },
});
