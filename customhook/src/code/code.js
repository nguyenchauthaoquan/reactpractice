import {useEffect, useState} from "react";

export const useColor = defaultColor => {
    const [color, setColor] = useState(defaultColor);

    useEffect(() => {
        switch (defaultColor) {
            case "C001":
                setColor("#FFF");
                break;
            case "C002":
                setColor("#ecffc7");
                break;
            case "C003":
                setColor("#c7feff");
                break;
            case "C004":
                setColor("#d6c7ff");
                break;
            case "C005":
                setColor("#ffc7d3");
                break;
            default:
                setColor("#000");
        }
    }, [defaultColor]);

    return [color, setColor];
}

export const useAge = defaultAge => {
  const [age, setAge] = useState(defaultAge);

  if (age > 60) {
      alert("Đây là người lớn tuổi");
  } else if ((age >= 40) && (age <= 60)) {
      alert("Đây là người trung niên");
  } else if ((age >= 20) && (age <= 40)) {
      alert("Đây là người trẻ");
  }

  return [age, setAge];
}