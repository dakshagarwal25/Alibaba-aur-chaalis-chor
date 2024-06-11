// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   let[uname,setuname]=useState('tinku');
//   return (
//     <div>
//       <h1>{uname}</h1>
//       <button onClick={()=>setuname('tinku singh')}>Click me</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('black');

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'black' ? 'white' : 'black'));
  };

  const [state, setState] = useState({
    btn: 'Khulja SimSim',
    cls: 'active'
  });

  const handleClick = () => {
    setState((prevState) => ({
      btn: prevState.cls === 'active' ? 'Band Hoja SimSim' : 'Khulja SimSim',
      cls: prevState.cls === 'active' ? 'inactive' : 'active'
    }));
  };

  return (
    <>
      <div className={`${state.cls} ${theme}`}>
        <p><h1><b>अलीबाबा और चालीस चोर</b></h1>

पुराने समय में फारस में अलीबाबा नाम का एक गरीब लकड़हारा रहता था। एक दिन, जब वह जंगल में लकड़ी काट रहा था, उसने चालीस चोरों के एक समूह को देखा। चोरों का सरदार एक बड़े पत्थर के सामने खड़ा होकर बोला, "खुल जा सिम सिम!" जादूई शब्द सुनते ही पत्थर खुल गया और एक गुफा का द्वार दिखाई दिया, जिसमें अनगिनत खजाने भरे पड़े थे।<br/>

चोरों के जाने के बाद, अलीबाबा ने भी पत्थर के पास जाकर वही जादूई शब्द दोहराए। पत्थर खुल गया और अलीबाबा गुफा के अंदर गया। वहाँ उसने सोना, जवाहरात और कीमती वस्तुओं के ढेर देखे। उसने कुछ सोने के सिक्के उठाए और घर लौट आया। अलीबाबा ने अपनी पत्नी को इस रहस्य के बारे में बताया और फिर अपने भाई कासिम को भी इस रहस्य में शामिल किया।<br/>

कासिम लालची था और ज्यादा खजाना लेने के लालच में गुफा में गया। लेकिन वह जादूई शब्द भूल गया और गुफा में फंस गया। चोरों ने उसे पकड़ लिया और मार डाला। अलीबाबा ने अपने भाई के शव को गुफा से बाहर निकाला और उसे सही ढंग से दफनाया।<br/>

चोरों को शक हुआ और उन्होंने अलीबाबा का पता लगाने की कोशिश की, लेकिन अलीबाबा की नौकरानी मरजीना की चतुराई से वे हर बार असफल रहे। अंत में, मरजीना ने चोरों के सरदार को मार डाला और बाकी चोर भाग गए। अलीबाबा ने अपनी ईमानदारी और चतुराई से खजाने को संभाला और अमीर बन गया, लेकिन उसने कभी अपनी अच्छाई और विनम्रता नहीं खोई।<br/>

इस प्रकार, अलीबाबा और चालीस चोरों की यह कहानी हमें यह सिखाती है कि सच्चाई और चतुराई से हर मुश्किल का सामना किया जा सकता है।</p>
      </div>
      <button onClick={handleClick}>
        {state.btn}
      </button>
      <button onClick={handleTheme}>
        Andhera Kayam Rahe
      </button>
    </>
  );
};

export default App;
