import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import DTFProfile from '../atoms/DTF-Profile';

function DTFprofiles({profiles}: any) {
  const [currentIndex, setCurrentIndex]: any = useState(0);
  const [nextCardOpacity, setNextCardOpacity]: any = useState(0);
  const [nextCardScale, setNextCardScale]: any = useState(0.8);

  const handleParametersUpdate = (e: any) => {
    switch (e.type) {
      case 'nextCardOpacity':
        setNextCardOpacity(e.value);
        break;
      case 'nextCardScale':
        setNextCardScale(e.value);
        break;
      // case 'currentIndex':
      //   setCurrentIndex(e.value);
      //   break;

      default:
        break;
    }
  };
  return (
    <View style={{flex: 1}}>
      {profiles
        .map((item: any, index: any) => (
          <View key={index}>
            <DTFProfile
              nextCardOpacity={nextCardOpacity}
              nextCardScale={nextCardScale}
              profile={item}
              index={index}
              setCurrentIndex={setCurrentIndex}
              setNextCardScale={setNextCardScale}
              setNextCardOpacity={setNextCardOpacity}
              handleParametersUpdate={handleParametersUpdate}
              currentIndex={currentIndex}
            />
          </View>
        ))
        .reverse()}
    </View>
  );
}

export default DTFprofiles;
