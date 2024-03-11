import React from 'react';
import { VscTools } from 'react-icons/vsc';
import { BiBookReader } from 'react-icons/bi';
import { TbAlertTriangle, TbZoomExclamation } from 'react-icons/tb';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { BsMegaphone, BsDiagram3 } from 'react-icons/bs';
import { GiGunshot } from 'react-icons/gi';
import { IoAppsOutline } from 'react-icons/io5';
import { SiMaildotru } from 'react-icons/si';

const iconComponents = {
  mapa: <TbZoomExclamation />,
  denuncias: <BsMegaphone />,
  recursos: <VscTools />,
  investigaciones: <BiBookReader />,
  reportes: <TbAlertTriangle />,
  podcast: <HiOutlineMusicalNote />,
  jefatura: <BsDiagram3 />,
  contacto: <SiMaildotru />,
  gatillo: <GiGunshot />,
  menu: <IoAppsOutline />,
};

const Icons = ({ icon, className, iconSize }) => {
  const iconComponent = iconComponents[icon] || null;

  return <div className={className} style={{ fontSize: iconSize }}>{iconComponent}</div>;
};

export default Icons;
