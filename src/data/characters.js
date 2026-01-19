import  { 
    sonicImg,
    tailsImg,
    amyImg,
    shadowImg,
    supersonicImg,
    knucklesImg,
    rougeImg,
    eggmanImg,
    creamImg,
    sonicIcon,
    tailsIcon,
    knucklesIcon,
    shadowIcon,
    amyIcon,
    rougeIcon,
    supersonicIcon,
    eggmanIcon,
    creamIcon,
    sonicSound,
    tailsSound,
    knucklesSound,
    amySound,
    supersonicSound,
    rougeSound,
    shadowSound,
    eggmanSound,
    creamSound,
}from "../assets";

const characters = [
  {
    id: 1,
    name: "Sonic the Hedgehog",
    icon:sonicIcon,
    image:sonicImg, 
    sound:sonicSound
  },
  {
    id: 2,
    name: "Miles Tails Prower",
    icon: tailsIcon,
    image:tailsImg,
    sound: tailsSound
  },
  {
    id: 3,
    name: "Knuckles the Echidna",
    icon: knucklesIcon,
    image: knucklesImg,
    sound: knucklesSound
  },
  {
    id: 4,
    name: "Shadow the Hedgehog",
    icon: shadowIcon,
    image: shadowImg,
    sound: shadowSound
  },
  {
    id: 5,
    name: "Supersonic",
    icon: supersonicIcon,
    image: supersonicImg,
    sound: supersonicSound
  },
  {
    id: 6,
    name: "Rouge the Bat",
    icon: rougeIcon,
    image: rougeImg,
    sound: rougeSound
  },
  {
    id: 7,
    name: "Dr.Eggman",
    icon: eggmanIcon,
    image: eggmanImg,
    sound: eggmanSound
  },
  {
    id: 8,
    name: "amy Rose",
    icon:  amyIcon,
    image: amyImg,
    sound: amySound
  },
  {
    id: 9,
    name: "cream the Rabbit",
    icon: creamIcon,
    image:  creamImg,
    sound: creamSound
  }
  
];

export default characters;
