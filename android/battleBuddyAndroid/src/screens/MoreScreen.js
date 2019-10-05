import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Linking} from 'react-native';
import CustomListItem from '../components/settings/CustomListItem';
import Socials from '../constants/Socials';
import {useMetaData} from '../context/MetaDataProvider';

const SectionTitle = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  text-transform: uppercase;
  margin-left: 10px;
  margin-top: 20px;
  margin: 20px 0 5px 10px;
`;

const Text = styled.Text`
  color: ${({theme}) => theme.colors.white};
`;

const Bold = styled(Text)`
  font-weight: bold;
`;

const ScrollView = styled.ScrollView`
  background: ${({theme}) => theme.colors.background};
`;

const MoreScreen = ({navigation}) => {
  const {data} = useMetaData();

  const DATA = [
    {
      title: 'About Battle Buddy',
      items: [
        {
          title: 'Developed by Veritas',
          image: require('../../assets/images/branding_and_logos/veritas_logo.png'),
          onPress: () => navigation.navigate('Veritas')
        },
        {
          title: 'View on Github',
          image: require('../../assets/images/branding_and_logos/github.png'),
          onPress: () =>
            Linking.openURL('https://github.com/VeritasDev/BattleBuddy')
        },
        {
          title: 'Attributions',
          image: require('../../assets/images/misc_icons/attributions.png'),
          onPress: () => navigation.navigate('Attributions')
        }
      ]
    },
    {
      title: 'Community Stats',
      items: [
        {
          title: (
            <Text>
              <Bold>
                {data.totalUserCount.toLocaleString().replace(',', '.')}
              </Bold>{' '}
              Battle Buddies have joined the fight!
            </Text>
          ),
          image: require('../../assets/images/misc_icons/user_count.png'),
          hideChevron: true
        }
      ]
    },
    {
      title: 'Want to support the development?',
      items: [
        {
          title: 'Feedback or Feature ideas?',
          subtitle: 'Join our discord!',
          image: require('../../assets/images/branding_and_logos/discord.png'),
          onPress: () => Linking.openURL(Socials.discord)
        },
        {
          title: 'Check Out The Team!',
          image: require('../../assets/images/branding_and_logos/the_team_logo.png'),
          onPress: () => navigation.navigate('Team')
        },
        {
          title: 'Watch an Ad',
          image: require('../../assets/images/misc_icons/watch_ad.png'),
          hideChevron: true
        }
      ]
    }
  ];

  return (
    <ScrollView>
      {DATA.map((section) => {
        return (
          <React.Fragment key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.items.map((item) => (
              <CustomListItem item={item} key={item.title} />
            ))}
          </React.Fragment>
        );
      })}
      <SectionTitle>v 0.0.1</SectionTitle>
    </ScrollView>
  );
};

MoreScreen.navigationOptions = {
  title: 'More',
  headerStyle: {
    backgroundColor: '#191919'
  },
  headerTintColor: '#FF491C',
  headerTitleStyle: {
    fontSize: 28
  }
};

MoreScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};

export default MoreScreen;
