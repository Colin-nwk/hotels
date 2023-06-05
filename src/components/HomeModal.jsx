import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeModal = ({ isModalVisible, setIsModalVisible }) => {
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
        <ModalContent style={{ width: "100%", height: 310 }}></ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeModal;

const styles = StyleSheet.create({});
