/**
 * Test the Menubar class to make sure it functions correctly.
 *
 * @jest-environment jsdom
 */

import { Menubar } from "../../../index";
import {
  openClose,
  clickTests,
  hoverTests,
  baseKeypressTests,
} from "../_common/functional";

openClose(Menubar);
clickTests(Menubar);
hoverTests(Menubar);
baseKeypressTests(Menubar);