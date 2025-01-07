'use client';
import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="VPFooter">
        <div className="container">
          <p v-if="theme.footer.message" className="message">
            Released under the MIT License. (e1b520c4)
          </p>
          <p v-if="theme.footer.copyright" className="copyright">
            Copyright © 2019-present VoidZero Inc. & Vite Contributors
          </p>
        </div>
      </footer>
      <style jsx>{`
        .VPFooter {
          position: relative;
          z-index: var(--next-z-index-footer);
          padding: 32px 24px;
          border-top: 1px solid #262626 !important;
          background: radial-gradient(circle at top center, #0f151a 30%, #000 80%);
        }

        .VPFooter.has-sidebar {
          display: none;
        }

        .VPFooter .a {
          text-decoration-line: underline;
          text-underline-offset: 2px;
          transition: color 0.25s;
        }

        .VPFooter .a:hover) {
          color: var(--next-c-text-1);
        }

        @media (min-width: 768px) {
          .VPFooter {
            padding: 32px;
          }
        }

        .container {
          margin: 0 auto;
          max-width: var(--next-layout-max-width);
          text-align: center;
        }

        .message,
        .copyright {
          line-height: 24px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(235, 235, 245, 0.6);
        }
      `}</style>
    </>
  );
};
