import { Text, View, Image } from "react-native";
import CustomButton from "../../components/button/CustomButton";
import Style from "./Style";
function Welcome({navigation}) {
  const handleLogin = () => {navigation.navigate('Login')};
  const handleRegister = () => {navigation.navigate('Register')};
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <Text style={Style.headerTitle}>Welcome</Text>
        <Text style={Style.headerTagLine}>Sign in or create a new account</Text>
      </View>
      <Image
        style={Style.img}
        source={require("../../../assets/welcome_page.png")}
      />
      <View style={Style.brand}>
        <View style={Style.brandTitle}>
          <Text style={Style.brandTitleStart}>Earn From </Text>
          <Text style={Style.brandTitleEnd}>Products</Text>
        </View>
        <Text style={Style.brandTagLine}>If you can’t buy it rent it</Text>
      </View>
      <View style={Style.footer}>
        <CustomButton
          text="Login "
          styles={{ marginBottom: 10 }}
          onClick={handleLogin}
        />
        <CustomButton
          text="Sign up "
          styles={{ marginBottom: 10 }}
          bg={true}
          onClick={handleRegister}
        />
        <Text style={Style.footerText}>Terms of service</Text>
      </View>
    </View>
  );
}

export default Welcome;