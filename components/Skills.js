import React from 'react'
import Group from './SkillItemGroup'
// import circle from '../styles/circle.css'

export default class Skills extends React.Component {
    render() {
        const skillImgs = [
            {
                name: 'Languages',
                list: [
                    { name: 'python', color: '#8993be', value: '70' }, 
                    { name: 'java', color: '#1e77b7', value: '70' },
                    { name: 'php', color: '#8993be', value: '70' },           
                    { name: 'c', color: '#3848aa', value: '60' },
                    { name: 'r', color: '#1d63b5', value: '60' },
                    { name: 'sql', color: '#147efb', value: '60' },
                    { name: 'bash', color: '#2f353f', value: '60' },
                    { name: 'matlab', color: '#fb8623', value: '60' }
                ]
            },
            {
                name: 'Web Development',
                list: [
                    { name: 'html5', color: '#f16529', value: '75' },
                    { name: 'css3', color: '#29a9df', value: '70' },
                    { name: 'bootstrap', color: '#8b57d9', value: '80' },                
                    { name: 'javascript', color: '#f7df1e', value: '70' },
                    { name: 'jquery', color: '#288cc4', value: '60' },
                    { name: 'angularjs', color: '#dd0330', value: '60' },
                    { name: 'nextjs', color: '#0f0f14', value: '45' },
                    { name: 'tailwindcss', color: '#40afb0', value: '25' },
                ]
            },
            {
                name: 'Framework',
                list: [
                    { name: 'spring', color: '#69be4f', value: '70' },           
                    { name: 'maven', color: '#bc063d', value: '70' },
                    { name: 'pytorch', color: '#c54730', value: '70' },
                    { name: 'tensorflow', color: '#ffa332', value: '60' },
                    { name: 'keras', color: '#e00000', value: '60' },
                ]
            },
            {
                name: 'Database',
                list: [
                    { name: 'mysql', color: '#0784af', value: '65' },
                    { name: 'mongodb', color: '#52b33f', value: '65' },
                    { name: 'oracle', color: '#fb0004', value: '65' },
                    { name: 'sqlserver', color: '#9c2e2f', value: '65' },
                    { name: 'firebase', color: '#ffcb2c', value: '55' },
                    { name: 'elasticsearch', color: '#18bbb0', value: '40' }
                ]
            },
            {
                name: 'Technology',
                list: [
                    { name: 'git', color: '#F05032', value: '60' },
                    { name: 'nodejs', color: '#89d92b', value: '60' },
                    { name: 'linux', color: '#fd8f00', value: '60' },
                    { name: 'npm', color: '#cb3736', value: '55' },
                    { name: 'aws', color: '#fb9100', value: '25' },
                    { name: 'kubernetes', color: '#2665e3', value: '45' },
                    { name: 'docker', color: '#2497ed', value: '45' },
                    { name: 'cordova', color: '#ff0000', value: '45' },
                ]
            } 
        ]

        return (
            <section className="hero wrapper has-text-centered">
                <div className="container">
                    {
                        skillImgs.map((item, key) => (
                            <Group key={key} name={item.name} items={item.list} />    
                        ))
                    }
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background-size: cover;
                        color: #D3A3A3 !important;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}