/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <header className="console-header">
        <img src="https://picsum.photos/seed/republic/200/200?blur=2" alt="The Republic Beacon" className="site-logo" referrerPolicy="no-referrer" />
        
        <div className="gaia-prompt-container">
            <div className="gaia-prompt-wrapper">
                <i className="fas fa-brain gaia-icon"></i>
                <div className="gaia-input-group">
                    <input type="text" className="gaia-input" placeholder="唤醒盖亚 (Awaken Gaia)... 向全知矩阵输入你的指令" autoComplete="off" />
                    <div className="gaia-status">STATUS: GAIA NEURAL NETWORK LISTENING...</div>
                </div>
                <button className="gaia-submit"><i className="fas fa-paper-plane"></i></button>
            </div>
        </div>
      </header>

      <main className="bento-grid">
          <section className="bento-item foundation">
              <h2>🏛️ 理想国 (The Republic)</h2>
              <p>人类最高思想库与硅基智慧，驱动Type I能源跃迁的哲人王与普惠引擎。</p>
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
          <p>
              STATUS: 0.67 KARDASHEV SCALE | INITIATING PROTOCOL: PROMETHEUS<br/><br/>
              <a href="#">🏛️ 访问旧世界数据库 (Legacy Archive)</a> | 
              <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>📜 文明纲领 (The Mandate)</a>
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

                  <h3>👁️ 你的呼唤：致未来的 4D 公民工程师</h3>
                  <p>未来已来，只是分布不均。本控制台，即为启动这一伟大事业的“第一推动力”。我们正在寻找具备极客精神、独立思考能力与创造力的<b>“4D公民工程师”</b>。</p>
                  <p style={{ textAlign: 'center', color: '#d4af37', fontWeight: 'bold', marginTop: '40px', fontSize: '1.1rem' }}>欢迎登舰。检索全知网络，启动你的普罗米修斯计划。</p>
              </div>
          </div>
      </div>
    </>
  );
}
