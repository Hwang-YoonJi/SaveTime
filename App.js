import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async () => { //함수생성
    try {
      await Location.requestPermissionsAsync(); //권한 인증받기
      const { 
        coords: {latitude, longitude } 
      } = await Location.getCurrentPositionAsync(); //지역정보 받아오기
      //api로 전송하고 날씨가져오기
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you", "So sad"); //사용자가 거절하면 뜨는 메시지 (try블럭에서 에러생기면 catch블럭실행)
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    retrun; isLoading ? <Loading /> : null; //isLoading이 있으면 <Loading />을 리턴하고, 아니면 null 리턴
  }
}
