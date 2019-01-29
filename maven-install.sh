#!/bin/bash

apt-get update -y

<<<<<<< HEAD
apt-get upgrade -y

add-apt-repository ppa:webupd8team/java

apt-get update -y

=======
apt-get install maven -y

apt-get upgrade -y

add-apt-repository ppa:webupd8team/java -y

apt-get update -y

echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections


echo debconf shared/accepted-oracle-license-v1-1 seen true | debconf-set-selections


>>>>>>> 53e29d2eff24ecee7fbdb7ea8fc54c865deaf16c
apt-get install oracle-java8-installer -y

wget -P /opt http://www-eu.apache.org/dist/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz

tar -xvzf /opt/apache-maven-3.3.9-bin.tar.gz

mv apache-maven-3.3.9 maven 

mv maveen /opt	

touch /etc/profile.d/mavenenv.sh

echo "export M2_HOME=/opt/maven" > /etc/profile.d/mavenenv.sh

echo "export PATH=${M2_HOME}/bin:${PATH}" > /etc/profile.d/mavenenv.sh

chmod +x /etc/profile.d/mavenenv.sh

source /etc/profile.d/mavenenv.sh

exit 0

