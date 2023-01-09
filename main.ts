esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Heart)
    esp8266.connectWiFi("\"DGH-Home", "\"Dowdow07190")
    if (esp8266.isWifiConnected()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
} else {
    basic.showIcon(IconNames.SmallDiamond)
}
