import { View, Text, ImageBackground, Pressable } from "react-native";
import { styles } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { ListItemProps } from "./types";
import { router } from "expo-router";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const ListItem = ({
  name,
  date,
  favourite,
  launchImage,
  missionTag,
}: ListItemProps) => (
  <Pressable
    onPress={() => router.push("/launchDetails")}
    style={styles.container}
  >
    <ImageBackground
      source={{ uri: launchImage }}
      style={styles.backgroundImage}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View>
          {favourite ? (
            <MaterialIcons name="star" size={32} color={"white"} />
          ) : (
            <MaterialIcons name="star-border" size={32} color={"white"} />
          )}
        </View>
      </View>
      <View style={styles.missionTag}>
        <Image
          style={styles.image}
          source={missionTag}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
      </View>
    </ImageBackground>
  </Pressable>
);
