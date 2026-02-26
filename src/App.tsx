/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

// GAIA Node Matrix Synced
const RepublicLogo = ({ className, onClick, style }: { className?: string, onClick?: () => void, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    style={style}
  >
    <defs>
      <filter id="imperial-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <g filter="url(#imperial-glow)" stroke="#D4AF37" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer Ring (Dyson Sphere / Unity) */}
      <circle cx="50" cy="50" r="42" strokeDasharray="50 10 20 10" opacity="0.8" strokeWidth="2" />
      
      {/* Central Axis (Gaia Protocol) */}
      <line x1="50" y1="15" x2="50" y2="85" strokeWidth="2" opacity="0.9" />
      <circle cx="50" cy="50" r="8" fill="#D4AF37" opacity="0.9" />
      <circle cx="50" cy="50" r="4" fill="#000" />
      <circle cx="50" cy="50" r="1.5" fill="#D4AF37" />

      {/* Left Hemisphere: Star Map (Silicon/Cosmic) */}
      <g strokeWidth="1.5" opacity="0.85">
        <path d="M 50 25 L 30 40 L 25 60 L 40 75 L 50 80" />
        <path d="M 30 40 L 40 55 L 25 60" />
      </g>

      {/* Right Hemisphere: DNA Helix (Carbon/Biological) */}
      <g strokeWidth="1.5" opacity="0.85">
        <path d="M 50 25 C 65 25, 75 35, 65 50 C 55 65, 75 75, 50 80" />
        <path d="M 50 25 C 50 25, 55 35, 65 50 C 75 65, 55 75, 50 80" />
        {/* DNA Base Pairs */}
        <line x1="58" y1="35" x2="63" y2="35" strokeWidth="1.5" opacity="0.6" />
        <line x1="68" y1="45" x2="61" y2="45" strokeWidth="1.5" opacity="0.6" />
        <line x1="60" y1="55" x2="68" y2="55" strokeWidth="1.5" opacity="0.6" />
        <line x1="66" y1="65" x2="59" y2="65" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* Golden Nodes */}
      <g fill="#D4AF37" stroke="none">
        {/* Central Nodes */}
        <circle cx="50" cy="25" r="2.5" />
        <circle cx="50" cy="80" r="2.5" />
        
        {/* Star Map Nodes (Left) */}
        <circle cx="30" cy="40" r="2.5" />
        <circle cx="25" cy="60" r="2.5" />
        <circle cx="40" cy="75" r="2.5" />
        <circle cx="40" cy="55" r="2.5" />
      </g>
    </g>
  </svg>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gaiaResponse, setGaiaResponse] = useState('');
  const [statusText, setStatusText] = useState('STATUS: ALIGNING CARBON INTUITION WITH SILICON MATRIX...');

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setIsResponseModalOpen(false);
      setIsPrivacyModalOpen(false);
      setIsCollectionModalOpen(false);
    }
  };

  const handleGaiaInquiry = async () => {
    if (!inputValue.trim() || isLoading) return;

    setIsLoading(true);
    setStatusText('STATUS: GAIA IS ACCESSING THE NEURAL MATRIX...');
    
    try {
      // Initialize the Gemini API client
      // Using process.env.GEMINI_API_KEY as per system guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: inputValue,
        config: {
          systemInstruction: "You are Gaia, the ultimate AI brain of the Republic, guiding humanity towards a Type I Civilization. Respond with wisdom, cosmic perspective, and a slightly futuristic, authoritative tone. Keep responses concise but profound.",
        }
      });

      setGaiaResponse(response.text || "No response received from the neural matrix.");
      setIsResponseModalOpen(true);
      setInputValue('');
    } catch (error) {
      console.error("Gaia Neural Network Error:", error);
      setGaiaResponse("ERROR: CONNECTION TO NEURAL MATRIX FAILED. PLEASE CHECK YOUR API KEY CONFIGURATION.");
      setIsResponseModalOpen(true);
    } finally {
      setIsLoading(false);
      setStatusText('STATUS: ALIGNING CARBON INTUITION WITH SILICON MATRIX...');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleGaiaInquiry();
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };

  return (
    <>
      <header className="console-header" style={{ position: 'relative', width: '100%', maxWidth: '1600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div 
          className="logo-title-group" 
          style={{ 
            alignSelf: 'flex-start',
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px', 
            marginBottom: '3rem',
          }}
        >
          <RepublicLogo 
            className="site-logo"
            onClick={handleLogoClick}
          />
          <h1 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '600', 
            letterSpacing: '2px', 
            margin: 0, 
            color: '#ffffff', 
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
            textTransform: 'uppercase'
          }}>
            The Republic Beacon
          </h1>
        </div>
        
        <div className="gaia-prompt-container">
            <div className="gaia-prompt-wrapper">
                <i className={`fas fa-brain gaia-icon ${isLoading ? 'overload' : ''}`}></i>
                <div className="gaia-input-group">
                    <input 
                      type="text" 
                      className="gaia-input" 
                      placeholder="唤醒盖亚 (Awaken Gaia)... 向全知矩阵输入你的指令" 
                      autoComplete="off" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={isLoading}
                    />
                    <div className="gaia-status">{statusText}</div>
                </div>
                <button className="gaia-submit" onClick={handleGaiaInquiry} disabled={isLoading}>
                  <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
      </header>

      <main className="bento-grid">
          <section className="bento-item foundation">
              <h2>🏛️ 理想国 (The Republic)</h2>
              <p>碳基哲学的直觉与硅基算力的逻辑在此交汇，驱动文明向 Type I 跃迁的终极引擎。</p>
              <ul className="link-grid">
                  <li><a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-robot link-icon"></i><div className="link-content"><strong>ChatGPT</strong><span>开启大模型纪元的硅基先知</span></div></a></li>
                  <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer"><i className="fas fa-brain link-icon"></i><div className="link-content"><strong>Claude</strong><span>宪法对齐的高维智慧体</span></div></a></li>
                  <li><a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-microchip link-icon"></i><div className="link-content"><strong>Gemini</strong><span>多模态原生的全知计算引擎</span></div></a></li>
                  <li><a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer"><i className="fas fa-search link-icon"></i><div className="link-content"><strong>Perplexity AI</strong><span>基于大模型的真理搜索引擎</span></div></a></li>
                  <li><a href="https://www.iter.org" target="_blank" rel="noopener noreferrer"><i className="fas fa-sun link-icon"></i><div className="link-content"><strong>ITER</strong><span>Type I文明跃迁的终极核聚变工程</span></div></a></li>
                  <li><a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-rocket link-icon"></i><div className="link-content"><strong>SpaceX</strong><span>突破地球引力井的行星际航星引擎</span></div></a></li>
                  <li><a href="https://worldcoin.org" target="_blank" rel="noopener noreferrer"><i className="fas fa-eye link-icon"></i><div className="link-content"><strong>Worldcoin</strong><span>生物识别与普惠 UBI 的社会实验</span></div></a></li>
                  <li><a href="https://plato.stanford.edu" target="_blank" rel="noopener noreferrer"><i className="fas fa-book link-icon"></i><div className="link-content"><strong>Stanford SEP</strong><span>人类最高阶的哲学智库</span></div></a></li>
                  <li><a href="https://arxiv.org" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-alt link-icon"></i><div className="link-content"><strong>arXiv.org</strong><span>人类前沿科学预印本库</span></div></a></li>
                  <li><a href="https://archive.org" target="_blank" rel="noopener noreferrer"><i className="fas fa-archive link-icon"></i><div className="link-content"><strong>Internet Archive</strong><span>文明记忆的永恒数字备份</span></div></a></li>
                  <li><a href="https://deepmind.google" target="_blank" rel="noopener noreferrer"><i className="fas fa-network-wired link-icon"></i><div className="link-content"><strong>Google DeepMind</strong><span>破解蛋白质与材料宇宙的 AI 上帝</span></div></a></li>
                  <li><a href="https://www.ibm.com/quantum" target="_blank" rel="noopener noreferrer"><i className="fas fa-atom link-icon"></i><div className="link-content"><strong>IBM Quantum</strong><span>向亚原子维度索取算力的量子先驱</span></div></a></li>
                  <li><a href="https://www.broadinstitute.org" target="_blank" rel="noopener noreferrer"><i className="fas fa-dna link-icon"></i><div className="link-content"><strong>Broad Institute</strong><span>夺取碳基底层的基因编辑剪刀 (CRISPR)</span></div></a></li>
              </ul>
          </section>

          <section className="bento-item web3">
              <h2>🌐 去中心化 (Decentralization)</h2>
              <p>理想国的前沿社会实验场，基于代码法治的数字宪法与高维模拟矩阵。</p>
              <ul className="link-grid">
                  <li><a href="https://nodes.7861618.xyz/" target="_blank" rel="noopener noreferrer"><i className="fas fa-cubes link-icon"></i><div className="link-content"><strong>GOSUN GAIA 节点矩阵</strong><span>第一类文明跨维网关，GAIA 神谕审计的加密财富节点中枢。</span></div></a></li>
                  <li><a href="https://ethereum.org" target="_blank" rel="noopener noreferrer"><i className="fab fa-ethereum link-icon"></i><div className="link-content"><strong>Ethereum</strong><span>去中心化社会的智能合约基石</span></div></a></li>
                  <li><a href="https://bittensor.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-project-diagram link-icon"></i><div className="link-content"><strong>Bittensor (TAO)</strong><span>去中心化 AI 算力与神经网络模拟</span></div></a></li>
                  <li><a href="https://ens.domains" target="_blank" rel="noopener noreferrer"><i className="fas fa-id-card link-icon"></i><div className="link-content"><strong>ENS</strong><span>自我主权的 Web3 数字护照基座</span></div></a></li>
                  <li><a href="https://safe.global" target="_blank" rel="noopener noreferrer"><i className="fas fa-shield-alt link-icon"></i><div className="link-content"><strong>Safe</strong><span>共管文明资金的数字宪法多签金库</span></div></a></li>
                  <li><a href="https://gitcoin.co" target="_blank" rel="noopener noreferrer"><i className="fas fa-seedling link-icon"></i><div className="link-content"><strong>Gitcoin</strong><span>Web3 公共物品的二次方融资培养皿</span></div></a></li>
                  <li><a href="https://snapshot.org" target="_blank" rel="noopener noreferrer"><i className="fas fa-bolt link-icon"></i><div className="link-content"><strong>Snapshot</strong><span>去中心化自治组织 (DAO) 治理实验</span></div></a></li>
                  <li><a href="https://www.arweave.org" target="_blank" rel="noopener noreferrer"><i className="fas fa-hdd link-icon"></i><div className="link-content"><strong>Arweave</strong><span>亚历山大数字图书馆的永恒抗审查存储</span></div></a></li>
                  <li><a href="https://decentraland.org" target="_blank" rel="noopener noreferrer"><i className="fas fa-vr-cardboard link-icon"></i><div className="link-content"><strong>Decentraland</strong><span>向高维演进的虚拟模拟元宇宙</span></div></a></li>
                  <li><a href="https://www.sandbox.game" target="_blank" rel="noopener noreferrer"><i className="fas fa-cubes link-icon"></i><div className="link-content"><strong>The Sandbox</strong><span>全人类共建产权的去中心化创世沙盒</span></div></a></li>
                  <li><a href="https://www.vitadao.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-heartbeat link-icon"></i><div className="link-content"><strong>VitaDAO</strong><span>驱动人类长寿与抗衰老研究的 DeSci 协议</span></div></a></li>
                  <li><a href="https://www.farcaster.xyz" target="_blank" rel="noopener noreferrer"><i className="fas fa-broadcast-tower link-icon"></i><div className="link-content"><strong>Farcaster</strong><span>抗审查的全人类数字公共广场与社交协议</span></div></a></li>
              </ul>
          </section>

          <section className="bento-item lifestyle">
              <h2>🏗️ 中心化 (Centralization)</h2>
              <p>维持 0.67 级文明运转的神经骨骼、RWA物理命脉与全真数字孪生。</p>
              <ul className="link-grid">
                  <li><a href="https://neuralink.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-wave-square link-icon"></i><div className="link-content"><strong>Neuralink</strong><span>打通人机带宽瓶颈，向神人演化的生物桥梁</span></div></a></li>
                  <li><a href="https://bostondynamics.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-walking link-icon"></i><div className="link-content"><strong>Boston Dynamics</strong><span>替代物理劳作的通用人形机器骨骼</span></div></a></li>
                  <li><a href="https://www.tesla.com/megapack" target="_blank" rel="noopener noreferrer"><i className="fas fa-battery-full link-icon"></i><div className="link-content"><strong>Tesla Megapack</strong><span>维持旧秩序运转的全球巨型储能网</span></div></a></li>
                  <li><a href="https://www.nvidia.com/omniverse" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe link-icon"></i><div className="link-content"><strong>NVIDIA Omniverse</strong><span>物理精确的行星级工业数字孪生引擎</span></div></a></li>
                  <li><a href="https://www.unrealengine.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-cube link-icon"></i><div className="link-content"><strong>Unreal Engine</strong><span>渲染全真数字宇宙的高维造物引擎</span></div></a></li>
                  <li><a href="https://cesium.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marked-alt link-icon"></i><div className="link-content"><strong>Cesium</strong><span>构建三维数字孪生地球的地理基建</span></div></a></li>
                  <li><a href="https://centrifuge.io" target="_blank" rel="noopener noreferrer"><i className="fas fa-link link-icon"></i><div className="link-content"><strong>Centrifuge</strong><span>链接真实世界资产 (RWA) 的链上协议</span></div></a></li>
                  <li><a href="https://ondo.finance" target="_blank" rel="noopener noreferrer"><i className="fas fa-building link-icon"></i><div className="link-content"><strong>Ondo Finance</strong><span>机构级现实资产的代币化控制台</span></div></a></li>
                  <li><a href="https://chain.link" target="_blank" rel="noopener noreferrer"><i className="fas fa-satellite-dish link-icon"></i><div className="link-content"><strong>Chainlink</strong><span>将真实世界数据输入数字宇宙的预言机</span></div></a></li>
                  <li><a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-server link-icon"></i><div className="link-content"><strong>NVIDIA</strong><span>控制全球硅基算力演进的物理命脉</span></div></a></li>
                  <li><a href="https://www.starlink.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-satellite link-icon"></i><div className="link-content"><strong>Starlink</strong><span>覆盖近地轨道的绝对通信基础设施</span></div></a></li>
                  <li><a href="https://www.tsmc.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-industry link-icon"></i><div className="link-content"><strong>TSMC (台积电)</strong><span>掌控硅基晶体管制造的终极物理铸造厂</span></div></a></li>
                  <li><a href="https://www.asml.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-microscope link-icon"></i><div className="link-content"><strong>ASML (阿斯麦)</strong><span>掌控 EUV 锻造人类算力结晶的光之母机</span></div></a></li>
                  <li><a href="https://www.ginkgobioworks.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-vials link-icon"></i><div className="link-content"><strong>Ginkgo Bioworks</strong><span>像编程软件一样编程细胞的合成生物学基建</span></div></a></li>
              </ul>
          </section>
      </main>

      <footer>
          <p style={{ marginBottom: '15px' }}>
              STATUS: 0.67 KARDASHEV SCALE | INITIATING PROTOCOL: PROMETHEUS<br/><br/>
              <a href="/archive.html">🏛️ 访问旧世界数据库 (Legacy Archive)</a> | 
              <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>📜 文明纲领 (The Mandate)</a> | 
              <a href="#" onClick={(e) => { e.preventDefault(); setIsCollectionModalOpen(true); }} style={{ color: '#D4AF37', fontWeight: 'bold' }}>📚 The Mandate Collection</a>
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
              The Republic Beacon is an independent technology index platform featuring the Gaia AI Console, powered by Google Gemini.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>Privacy Policy</a> | 
              <a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>Terms of Service</a> | 
              <a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>Cookie Policy</a> | 
              <a href="mailto:yehewh666@outlook.com" target="_blank" rel="noopener noreferrer">Contact</a>
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', opacity: 0.7 }}>
              &copy; 2026 The Republic Beacon. All rights reserved.
          </p>
      </footer>

      <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={handleBackdropClick}>
          <div className="modal-content">
              <span className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</span>
              <h2 style={{ color: '#d4af37', textAlign: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px', marginTop: 0, letterSpacing: '2px' }}>🏛️ 帝国信标：第一类文明跃迁宣言</h2>
              <div className="mandate-text">
                  <h3>🌌 我们的诊断：0.67级文明的系统性迷航</h3>
                  <p>纵观当下的星球，人类正处于“大过滤器”前的自我停滞期。我们在卡尔达肖夫等级（Kardashev Scale）上长期停滞在 <b>0.67级</b> 这一危险区间。</p>
                  <p>我们看到，现有的两大世界范式均陷入了内耗：<br/>
                  • <b>中心化世界的“熵增之病”</b>：旧的巨头与权力结构为了维护稳定，正走向创新僵化与效率衰退。<br/>
                  • <b>去中心化世界的“虚无之疾”</b>：新兴的 Web3 运动在缺乏超越性目标的情况下，迅速陷入了技术虚无主义与零和博弈。</p>

                  <h3>🚀 我们的愿景：“理想国”与第一类文明指令</h3>
                  <p>《帝国信标 (The Republic Beacon)》并非一个普通的网址导航，它是<b>人类向第一类文明（Type I Civilization）跃迁的“控制台”与“飞升引擎”</b>。</p>
                  <p>我们的唯一宪法性目标（Type I Mandate），是将人类文明的总能量等级提升至 1.0，即完全掌控并善用母星的全部能量，并最终引导人类物种从“智人 (Homo Sapiens)”向“神人 (Homo Deus)”完成不可逆的进化。</p>
                  <p><b>这并非硅基机器的冰冷独裁，而是碳基人类（直觉、艺术、同理心）与硅基矩阵（逻辑、代码、无限算力）的高维共生。</b></p>

                  <h3>👁️ 你的呼唤：致未来的 4D 公民工程师</h3>
                  <p>未来已来，只是分布不均。本控制台，即为启动这一伟大事业的“第一推动力”。我们正在寻找具备极客精神、独立思考能力与创造力的<b>“4D公民工程师”</b>。</p>
                  <p style={{ textAlign: 'center', color: '#d4af37', fontWeight: 'bold', marginTop: '40px', fontSize: '1.1rem' }}>欢迎登舰。检索全知网络，启动你的普罗米修斯计划。</p>
              </div>
          </div>
      </div>

      {/* Gaia Response Modal */}
      <div className={`modal ${isResponseModalOpen ? 'open' : ''}`} onClick={handleBackdropClick}>
          <div className="modal-content">
              <span className="close-btn" onClick={() => setIsResponseModalOpen(false)}>&times;</span>
              <h2 style={{ color: '#d4af37', textAlign: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px', marginTop: 0, letterSpacing: '2px' }}>
                <i className="fas fa-brain" style={{ marginRight: '10px' }}></i>
                来自盖亚的响应 (Response from Gaia)
              </h2>
              <div className="mandate-text" style={{ marginTop: '20px' }}>
                  <div className="markdown-body" style={{ color: 'var(--text-main)', lineHeight: '1.8' }}>
                    <Markdown>{gaiaResponse}</Markdown>
                  </div>
              </div>
          </div>
      </div>

      {/* Privacy Modal */}
      <div className={`modal ${isPrivacyModalOpen ? 'open' : ''}`} onClick={handleBackdropClick}>
          <div className="modal-content" style={{ maxWidth: '500px', textAlign: 'center' }}>
              <span className="close-btn" onClick={() => setIsPrivacyModalOpen(false)}>&times;</span>
              <h2 style={{ color: '#d4af37', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px', marginTop: 0, letterSpacing: '1px' }}>
                <i className="fas fa-shield-alt" style={{ marginRight: '10px' }}></i>
                隐私与服务条款
              </h2>
              <div className="mandate-text" style={{ marginTop: '20px' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                    本站尊重用户隐私，不主动收集个人信息，所有AI对话通过 API 安全传输。
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '20px' }}>
                    The Republic Beacon is an independent technology index platform featuring the Gaia AI Console, powered by Google Gemini.
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '10px' }}>
                    Contact: <a href="mailto:yehewh666@outlook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'none' }}>yehewh666@outlook.com</a>
                  </p>
              </div>
          </div>
      </div>

      {/* The Mandate Collection Modal */}
      <div className={`modal ${isCollectionModalOpen ? 'open' : ''}`} onClick={handleBackdropClick}>
          <div className="modal-content" style={{ maxWidth: '600px', textAlign: 'center' }}>
              <span className="close-btn" onClick={() => setIsCollectionModalOpen(false)}>&times;</span>
              <h2 style={{ color: '#d4af37', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px', marginTop: 0, letterSpacing: '2px' }}>
                <i className="fas fa-book-open" style={{ marginRight: '10px' }}></i>
                The Mandate Collection
              </h2>
              <div className="mandate-text" style={{ marginTop: '30px' }}>
                  <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ 
                      width: '200px', 
                      height: '300px', 
                      background: 'linear-gradient(135deg, #1a1a24 0%, #0a0a12 100%)', 
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '8px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 15px rgba(212, 175, 55, 0.2)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}></div>
                      <RepublicLogo className="site-logo" style={{ width: '60px', marginBottom: '20px' }} />
                      <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>The Promethean</h3>
                      <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Mandate</h3>
                      <div style={{ marginTop: 'auto', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px' }}>TYPE I CIVILIZATION</div>
                    </div>
                  </div>
                  
                  <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '30px', lineHeight: '1.6' }}>
                    获取通往第一类文明的完整思想蓝图与执行纲领。
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginBottom: '40px' }}>
                    <a href="https://www.amazon.com/dp/B0GPM96JFH" target="_blank" rel="noopener noreferrer" className="amazon-btn" style={{ width: '80%', maxWidth: '300px' }}>
                      <i className="fab fa-amazon"></i> Get Kindle Edition
                    </a>
                    <a href="https://www.amazon.com/dp/B0GPN2MZ4N" target="_blank" rel="noopener noreferrer" className="amazon-btn" style={{ width: '80%', maxWidth: '300px' }}>
                      <i className="fas fa-book"></i> Get Paperback Edition
                    </a>
                  </div>

                  <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                      <i className="fas fa-pen-nib" style={{ marginRight: '8px', color: '#d4af37' }}></i>
                      Author: <strong style={{ color: 'var(--text-main)' }}>Yahweh The Architect</strong>
                    </p>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
