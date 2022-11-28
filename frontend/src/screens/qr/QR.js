import { View, Text, StyleSheet, Button } from "react-native";
import { useState, useEffect } from "react";
import CustomButton from "../../components/button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../store/slices/AuthSlice";
import Style from "./Style";
import Alert from "../../components/alert/Alert";
import Header from "../../components/header/header";
import { BarCodeScanner } from 'expo-barcode-scanner';
import auth from "../../services/auth/Auth";
import { setToken } from "../../store/actions/AppActions";

export default function QR({ previous, navigation }) {
    const { alert } = useSelector(({ authSlice }) => authSlice);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const { userId } = useSelector(({ appSlice }) => appSlice);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
        if (data.length == 4) {
            const response = await auth.vertifyOtp(data, userId);
            if (response.status) {
                console.log(response.token)
                dispatch(setToken({ token: response.token, secure: true, userId }))
            } else {
                dispatch(
                    authSlice.actions.setAlert({
                        text: "QR is invalid",
                    })
                );
            }
        }
    };
    if (hasPermission === null) {
        return <Text style={Style.title}>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text style={Style.title}>No access to camera</Text>;
    }
    return (
        <View style={Style.container}>
            <Header navigation={navigation} />
            <Text style={Style.title}>Scan QR code </Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ width: "80%", height: "70%", borderRadius: 10 }}
            />


            {scanned && <CustomButton styles={{ marginTop: 10 }} text='Tap to Scan Again' onPress={() => setScanned(false)} />}
            {alert ? <Alert /> : <></>}
        </View>
    );
}
