cript tells shell to install softwares here

apt-get update

apt-get install firefox -y

apt-get install eclipse -y

apt-get install geany -y

apt-get install xrdp -y

apt-get install icewm -y

apt-get install idesk -y

apt-get install dpkg -y

apt-get install rox-filer -y

apt-get install scp -y

apt-get install xterm -y

apt-get install zip -y

apt-get install unzip -y

#script create linkfiles:-

ln -s /usr/share/icons/hicolor/16x16/apps/firefox.png firefox.png

ln -s /usr/share/icons/hicolor/16x16/apps/eclipse.png eclipse.png

ln -s /usr/share/pixmaps/rox-filer.png rox-filer.png

ln -s /usr/share/icons/hicolor/256x256@2x/apps/codelite.png codelite.png

ln -s /usr/share/icons/hicolor/16x16/apps/geany.png geany.png

#hear script perform directory struchure:-

mkdir /mnt/courseware

scp 172.31.6.36/root/cpp.zip /root

unzip cpp.zip 

cp -a cpp /mnt/courseware 

scp 172.31.6.36/root/menu.zip /root

unzip menu.zip

cp menu /usr/share/icewm/menu 

mkdir/home/ubuntu/.icewm

mkdir /home/ubuntu/.idesktop

scp 172.31.6.36/home/ubuntu/.icewm/startup /home/ubuntu/.icewm/startup

scp 172.31.6.36/home/ubuntu/.ideskrc /home/ubuntu/.ideskrc

scp 172.31.6.36/home/ubuntu/.idesktop/* /home/ubuntu/.idesktop

#echo "idesk >> /tmp/idesklog &" > /home/ubuntu/.icewm/startup

#hear script tells to install cpp required packages

apt-get update

apt-get install g++ -y


#hear the script tell to install Adobe reader to pdf docs:-

apt-get install gdebi-core -y

wget ftp://ftp.adobe.com/pub/adobe/reader/unix/9.x/9.5.5/enu/AdobeRdr9.5.5-1_i386linux_enu.deb 

dpkg -i AdobeRdr9.5.5-1_i386linux_enu.deb -y

#gdebi Adbe* .deb

dpkg --add-architecture i386 

apt install libgdk-pixbuf2.0-0:i386 -y

apt install libgtk2.0-0:i386 -y

dpkg -i AdobeRdr9.5.5-1_i386linux_enu.deb -y


# here the scrit will install codelite 

sh -c `echo "deb http://repos.codelite.org/ubuntu/ xenial universe" >> /etc/apt/sources.list.d/codelite/list`

apt-key adv --fetch-keys http://repos.codelite.org/codelite.asc

apt-get update

apt-get install codelite wxcrafter -y

apt-get install codelite=9.1* -y

exit 0

