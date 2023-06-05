import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeModal = ({
  isModalVisible,
  setIsModalVisible,
  rooms,
  setRooms,
  children,
  setChildren,
  adults,
  setAdults,
}) => {
  return (
    <>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setIsModalVisible(!isModalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setIsModalVisible(!isModalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setIsModalVisible(!isModalVisible)}
        visible={isModalVisible}
        onTouchOutside={() => setIsModalVisible(!isModalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View style={styles.container}>
            <Text style={styles.inputText}>Rooms</Text>
            <View style={styles.container}>
              <Pressable
                style={styles.input}
                onPress={() => setRooms(Math.max(1, rooms - 1))}
              >
                <Text style={styles.inputText}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.inputText}>{rooms}</Text>
              </Pressable>
              <Pressable
                style={styles.input}
                onPress={() => setRooms(rooms + 1)}
              >
                <Text style={styles.inputText}>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.inputText}>Adults</Text>
            <View style={styles.container}>
              <Pressable
                style={styles.input}
                onPress={() => setAdults(Math.max(1, adults - 1))}
              >
                <Text style={styles.inputText}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.inputText}>{adults}</Text>
              </Pressable>
              <Pressable
                style={styles.input}
                onPress={() => setAdults(adults + 1)}
              >
                <Text style={styles.inputText}>+</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.inputText}>Children</Text>
            <View style={styles.container}>
              <Pressable
                style={styles.input}
                onPress={() => setChildren(Math.max(0, children - 1))}
              >
                <Text style={styles.inputText}>-</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.inputText}>{children}</Text>
              </Pressable>
              <Pressable
                style={styles.input}
                onPress={() => setChildren(children + 1)}
              >
                <Text style={styles.inputText}>+</Text>
              </Pressable>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};
// FIXME: 55:00

export default HomeModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  input: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderColor: "#bebebe",
    backgroundColor: "#e0e0e0",
  },
  inputText: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 6,
    paddingTop: 5,
  },
});
