// Using the provided hook
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Button, Pressable, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

export default function UserActions(props: { options: string[] }) {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();

  const onPress = () => {
    const options = props?.options;
    const destructiveButtonIndex = props?.options.indexOf("Logout");
    const naviagte = props?.options.indexOf("About");
    const cancelButtonIndex = -1;

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case naviagte:
            router.push("/about/about");

            break;

          case destructiveButtonIndex:
            if (router.canDismiss()) {
              router.dismissAll();
            }
            router.replace("/");
            break;
          case cancelButtonIndex:
            break;
        }
      }
    );
  };

  return (
    <Pressable onPress={onPress} style={styles.header}>
      <AntDesign name="menu-fold" size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginRight: 6,
  },
});
