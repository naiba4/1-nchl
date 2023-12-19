import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFooter.module.css';
import Link from '@docusaurus/Link';
import MediumImage from '../../../static/img/icons/medium.svg';
import RedditImage from '../../../static/img/icons/reddit.svg';
import TwitterImage from '../../../static/img/icons/twitter.svg';
import DiscordImage from '../../../static/img/icons/discord.svg';
import YoutubeImage from '../../../static/img/icons/youtube.svg';
import TelegramImage from '../../../static/img/icons/telegram.svg';
import GithubImage from '../../../static/img/icons/github.svg';
import chevronRightImg from '../../../static/img/chevron-right.svg';


const FooterLinks = {
    links: [
        {
            title: 'Protocols',
            links: [
                {
                    title: 'Liquidity Protocol',
                    link: 'https://1inch.io/liquidity-protocol/'
                },
                {
                    title: 'Aggregation Protocol',
                    link: 'https://1inch.io/aggregation-protocol/'
                },
                {
                    title: 'Limit Order Protocol',
                    link: 'https://1inch.io/limit-order-protocol/'
                },
                {
                    title: 'Tokens',
                    link: 'https://1inch.io/token/'
                }
            ]
        },
        {
            title: 'Governance',
            links: [
                {
                    title: '1inch DAO',
                    link: 'https://1inch.io/dao/'
                },
                {
                    title: '1INCH token',
                    link: 'https://1inch.io/token/'
                },
                {
                    title: 'Forum',
                    link: 'https://gov.1inch.io/'
                }
            ]
        },
        {
            title: 'Support',
            links: [
                {
                    title: 'Help center',
                    link: 'https://help.1inch.io/en/'
                },
                {
                    title: 'API',
                    link: '/'
                },
                {
                    title: 'Press room',
                    link: 'https://1inch.io/press-room/'
                },
                {
                    title: 'Terms of service',
                    link: 'https://1inch.io/assets/1inch_network_terms_of_use.pdf'
                },
                {
                    title: 'Privacy policy',
                    link: 'https://1inch.io/assets/1inch_network_privacy_policy.pdf'
                }
            ]
        },
        {
            title: 'Legacy',
            links: [
                {
                    title: '1inch v.1 (Legacy)',
                    link: '/'
                },
                {
                    title: '1inch v.2 (Legacy)',
                    link: '/'
                },
                {
                    title: 'Earn (Legacy)',
                    link: '/'
                }
            ]
        }
    ],
    socialMedia: [
        {
            href: 'https://blog.1inch.io/',
            image: <MediumImage/>
        },
        {
            href: 'https://www.reddit.com/r/1inch/',
            image: <RedditImage/>
        },
        {
            href: 'https://twitter.com/1inch',
            image: <TwitterImage/>
        },
        {
            href: 'https://discord.com/invite/1inch',
            image: <DiscordImage/>
        },
        {
            href: 'https://www.youtube.com/channel/UCk0nvK4bHpteQXZKv7lkq5w',
            image: <YoutubeImage/>
        },
        {
            href: 'https://t.me/OneInchNetwork',
            image: <TelegramImage/>
        },
        {
            href: 'https://github.com/1inch',
            image: <GithubImage/>
        }
    ]
}

export default function HomepageFooter() {
    return (
        <section className={styles.footerTopBorder}>
            <div className={clsx('page-container', styles.footer)}>
                <div className={styles.footerColumnWrap}>
                    {
                        FooterLinks.links.map((props, idx) => (
                            <div className={styles.footerColumn} key={idx}>
                                <span className={styles.footerColumnTitle}>{props.title}</span>
                                {
                                    props.links.map((linkProps, index) => (
                                        <Link key={index} className={styles.footerColumnLink} to={linkProps.link}>
                                            {linkProps.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div>
                    <p className={styles.footerSubscribeTitle}>Subscribe to 1inch newsletter</p>
                    <p className={styles.footerSubscribeText}>Get the latest news and updates</p>
                    <Link to='https://cdn.forms-content.sg-form.com/b14fb08e-939b-11eb-873a-46ac7bfee17b'
                          className={styles.footerSubscribeButton}>
                        <span>Subscribe</span>
                        <img src={chevronRightImg}/>
                    </Link>
                    <div className={styles.socialMediaWrap}>
                        {
                            FooterLinks.socialMedia.map((media, idx) => (
                                <Link className={styles.socialMediaLink} to={media.href} key={idx}>
                                    {media.image}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={clsx('page-container', styles.afterFooter)}>
                <span>{new Date().getFullYear()} 1inch Network</span>
                <span>ENS: 1inch.eth</span>
                <span>BUIDL @ETHNewYork 2019</span>
            </div>
        </section>
    );
}
